import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  //(dato de git) si hacemos git checkout -- . podemos revertir al ultimo commit

  async executeSeed() {
    //Con esta linea de codigo borramos la base de datos cada vez que ejecutamos la semilla hay que tener muchoi cuidado de no usarlo en produccion
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const insertPokemon: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      // const pokemon = await this.pokemonModel.create({name, no}); Con esta hacemos las inserciones una por una y no es eficiente para nuestro backend ya que tendriamos que esperar que en este caso los 650 pokemon sean cargados uno a uno y eso llevaria mas tiempo lo cual haria repercucion en la experiencia de usuario 

      insertPokemon.push({ name, no });
    });

    //Con esta linea de codigo hacemos una insercion multiple a nuestra base de datos y no tendriamos que esperar a que se haga una por una y esperar a que todas las promesas sean resueltas
    await this.pokemonModel.insertMany(insertPokemon);

    return 'Seed Execute';
  }

  async populateDB() {}
}

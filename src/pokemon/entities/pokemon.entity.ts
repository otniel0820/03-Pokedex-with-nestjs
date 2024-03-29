import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//Al extender de document de mongoose nuestra entidad este le añadira toda la funcionalidad o informacion respectiva a nuestra entidad
@Schema()
export class Pokemon extends Document {
    
    @Prop({
        unique:true,
        index: true,
    })
    name: string;

    @Prop({
        unique:true,
        index: true,
    })
    no: number
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
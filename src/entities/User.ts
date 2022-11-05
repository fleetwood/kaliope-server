import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Property({type: "text", unique: true})
  username!: string;
  
  @Field()
  @Property({type: "text", unique: true})
  email!: string;
  
  @Property({type: "text"})
  password!: string;
}

import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @Property()
  title!: string;
}

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
  
  @Field()
  @Property({type: "text", unique: true})
  uid!: string;
  
  @Field()
  @Property({type: "boolean", nullable:true, default: false})
  emailVerified!: boolean;
  
  @Field()
  @Property({type: "boolean", nullable:true, default: true})
  isAnonymous: boolean;
  
  @Field()
  @Property({type: "text", nullable: true})
  displayName: string;
  
  @Field()
  @Property({type: "text", nullable: true})
  photoURL: string
  
}

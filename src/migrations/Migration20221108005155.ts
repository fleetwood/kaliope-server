import { Migration } from '@mikro-orm/migrations';

export class Migration20221108005155 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "uid" text not null, add column "email_verified" boolean null default false, add column "is_anonymous" boolean null default true, add column "display_name" text null, add column "photo_url" text null;');
    this.addSql('alter table "user" add constraint "user_uid_unique" unique ("uid");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_uid_unique";');
    this.addSql('alter table "user" drop column "uid";');
    this.addSql('alter table "user" drop column "email_verified";');
    this.addSql('alter table "user" drop column "is_anonymous";');
    this.addSql('alter table "user" drop column "display_name";');
    this.addSql('alter table "user" drop column "photo_url";');
  }

}

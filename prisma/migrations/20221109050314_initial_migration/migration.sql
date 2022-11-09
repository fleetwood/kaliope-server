-- CreateTable
CREATE TABLE "book" (
    "bookid" TEXT NOT NULL,
    "cover" VARCHAR(255),
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("bookid")
);

-- CreateTable
CREATE TABLE "bookrating" (
    "bookratingid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookrating_pkey" PRIMARY KEY ("bookratingid")
);

-- CreateTable
CREATE TABLE "comment" (
    "commentid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "commentingid" TEXT,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("commentid")
);

-- CreateTable
CREATE TABLE "post" (
    "postid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" VARCHAR(255),
    "header_image" VARCHAR(255),
    "content" TEXT NOT NULL,
    "replytoid" TEXT,

    CONSTRAINT "post_pkey" PRIMARY KEY ("postid")
);

-- CreateTable
CREATE TABLE "user" (
    "userid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "email_verified" BOOLEAN DEFAULT false,
    "is_anonymous" BOOLEAN DEFAULT true,
    "display_name" TEXT,
    "photo_url" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_unique" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_unique" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_uid_unique" ON "user"("uid");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "author" FOREIGN KEY ("bookid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookrating" ADD CONSTRAINT "author" FOREIGN KEY ("bookratingid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookrating" ADD CONSTRAINT "book_comment_rating" FOREIGN KEY ("bookratingid") REFERENCES "comment"("commentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "author" FOREIGN KEY ("commentid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_commentingid_fkey" FOREIGN KEY ("commentingid") REFERENCES "comment"("commentid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "bookfeedback" FOREIGN KEY ("commentid") REFERENCES "book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_postid_fkey" FOREIGN KEY ("postid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "reply_to" FOREIGN KEY ("replytoid") REFERENCES "post"("postid") ON DELETE SET NULL ON UPDATE CASCADE;

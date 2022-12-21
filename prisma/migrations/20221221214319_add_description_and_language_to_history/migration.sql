/*
  Warnings:

  - You are about to alter the column `created_at` on the `category` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_at` on the `category` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `int` on the `chapter` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `chapter` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `chapter` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `verified_at` on the `email_verify` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `email_verify` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `history` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_at` on the `history` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `history_comment` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_at` on the `history_comment` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `history_complaint` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `user_like` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `volume` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `volume` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `id` to the `chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `update_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `chapter` DROP PRIMARY KEY,
    DROP COLUMN `int`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `updated_at` DATETIME NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `email_verify` MODIFY `verified_at` DATETIME NULL,
    MODIFY `created_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `history` ADD COLUMN `description` LONGTEXT NOT NULL,
    ADD COLUMN `language` VARCHAR(50) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `update_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `history_comment` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `update_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `history_complaint` MODIFY `created_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `update_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `user_like` MODIFY `created_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `volume` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `updated_at` DATETIME NULL;

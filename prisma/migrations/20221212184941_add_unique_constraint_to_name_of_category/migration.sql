/*
  Warnings:

  - You are about to alter the column `created_at` on the `category` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_at` on the `category` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
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
  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `update_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `chapter` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `email_verify` MODIFY `verified_at` DATETIME NULL,
    MODIFY `created_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `history` MODIFY `created_at` DATETIME NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX `category_name_key` ON `category`(`name`);

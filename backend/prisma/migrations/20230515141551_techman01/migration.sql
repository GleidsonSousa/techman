-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_equipamento_fkey`;

-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_perfil_fkey`;

-- AlterTable
ALTER TABLE `equipamento` MODIFY `imagem` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_equipamento_fkey` FOREIGN KEY (`equipamento`) REFERENCES `Equipamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_perfil_fkey` FOREIGN KEY (`perfil`) REFERENCES `Perfil`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

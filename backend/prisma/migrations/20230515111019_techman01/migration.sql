-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_perfil_fkey` FOREIGN KEY (`perfil`) REFERENCES `Perfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

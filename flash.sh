openocd -f interface/stlink-v2.cfg -f target/stm32f4x.cfg -c transport\ select\ hla_swd -c init -c reset\ halt -c flash\ write_image\ erase\ F429_Coreboard.elf -c reset\ run -c shutdown
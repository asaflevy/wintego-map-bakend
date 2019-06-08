import 'dotenv/config';

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

const port = process.env.PORT || 4000;

async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const options = new DocumentBuilder()
        .setTitle('Wintego Api')
        .setVersion('1.0')
        .addTag('Wintego')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(port);
    Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');

}

bootstrap();

package com.javatechie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.validation.annotation.Validated;

@SpringBootApplication
@Validated
public class SpringbbotMongoAtlasApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbbotMongoAtlasApplication.class, args);
    }
}

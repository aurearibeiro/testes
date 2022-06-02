package com.inatel;

import com.github.javafaker.Faker;

import java.util.Locale;

public class App {

    private Faker faker;

    public App() {

        this.faker = new Faker(new Locale("pt-BR"));
    }

    public String geraNome() {

        return faker.name().fullName();
    }

    public String geraPassword() {

        return faker.internet()
                .password(8, 16,
                        true, false, true);
    }

    public String geraEmail() {

        return faker.internet().emailAddress();
    }

    public String geraIdInvalido() {

        return faker.internet().uuid();
    }

    public String montaUsuario(String nome, String email, String password) {

        return "{\"nome\": \"" + nome + "\", \"email\": \"" + email + "\", \"password\": \"" + password
                + "\", \"administrador\": \"true\"}";
    }
}

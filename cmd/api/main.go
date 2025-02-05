package main

import (
	"flag"
	"fmt"
	"icu.imta.gsarbaj.react/internal/repository"
	"icu.imta.gsarbaj.react/internal/repository/dbrepo"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	DSN    string // Data Source Name
	Domain string
	DB     repository.DatabaseRepository
}

func main() {
	// set application config

	var app application

	//read from command line

	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=react sslmode=disable timezone=UTC connect_timeout=5", "Postgres connection string")
	flag.Parse()

	// connect to the database

	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connection().Close()

	//start a web server

	app.Domain = "example.com"

	log.Printf("Starting server on port %d", port)

	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}

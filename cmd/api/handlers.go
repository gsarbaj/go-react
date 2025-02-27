package main

import (
	"log"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "Active",
		Message: "Hello World",
		Version: "0.0.1",
	}

	_ = app.writeJSON(w, http.StatusOK, payload)

}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	movies, err := app.DB.AllMovies()
	if err != nil {
		log.Println(err)
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, movies)

}

func (app *application) authenticate(w http.ResponseWriter, r *http.Request) {
	// read json payload

	var requestPayload struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := app.readJSON(w, r, &requestPayload)
	if err != nil {
		app.errorJSON(w, err, http.StatusBadRequest)
		return
	}

	// validate user against database

	// check password

	// create a jwt user

	u := jwtUser{
		ID:        1,
		FirstName: "Admin",
		LastName:  "User",
	}

	// generate tokens

	tokens, err := app.auth.GenerateTokenPair(&u)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	log.Printf(tokens.Token)

	refrshCookie := app.auth.GetRefreshCookie(tokens.RefreshToken)
	http.SetCookie(w, refrshCookie)

	w.Write([]byte(tokens.Token))
}

package repository

import (
	"database/sql"
	"icu.imta.gsarbaj.react/internal/models"
)

type DatabaseRepository interface {
	Connection() *sql.DB
	AllMovies() ([]*models.Movie, error)
}

import {getAllMovies} from "@/server/getAllMovies";
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from "react";

export default async function MoviesPage() {

    const moviesList = await getAllMovies() || []

    const moviesRender = moviesList.map((movie: {
        id: Key | null | undefined;
        title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
        release_date: string | number | Date;
        runtime: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
        mpaa_rating: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
        description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
    }) => (
        <li key={movie.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-600">
                <strong>Release Date:</strong>{" "}
                {new Date(movie.release_date).toLocaleDateString()}
            </p>
            <p>
                <strong>Runtime:</strong> {movie.runtime} min
            </p>
            <p>
                <strong>MPAA Rating:</strong> {movie.mpaa_rating}
            </p>
            <p>{movie.description}</p>
        </li>
    ));

    return (
        <>
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Movie List</h1>
                <ul className="space-y-4">{moviesRender}</ul>
            </div>

        </>
    );
};

// created on 05/02/2025 12:08

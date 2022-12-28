import React, { useState } from "react";
export function useQuery() {
    const [query, setQuery] = useState("");
    return {
        query: query,
        setQuery: setQuery,
    };
}

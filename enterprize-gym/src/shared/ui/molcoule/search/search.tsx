import { useState } from "react";

import { Input } from "../../atoms/input/input";
import { Spinner } from "../../atoms/spiner/spinner";

import Classes from "./styles/Search.module.css";
import SearchIcon from '../../../../assets/icons/search.svg'

import type SEARCH_PROPS_INTERFACE from "./interfaces/searchInterfaces";

/**
 * Search Component
 *
 * A reusable molecular search field built on top of the Input atom.
 *
 * Controlled — the query lives in local state here and is pushed to the
 * parent through `onChange`. `value` seeds the initial text.
 *
 * Behavior:
 * - Enter key or button click calls onSearch(query).
 * - While loading, a spinner replaces the icon.
 */

export const Search = ({
  mode,
  size,
  placeholder,
  disabled,
  loading,
  value,
  onChange,
  onSearch,
}: SEARCH_PROPS_INTERFACE) => {
  const [query, setQuery] = useState(value ?? "");

  return (
    <div
      className={Classes.container}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onSearch?.(query);
        }
      }}
    >
      <Input
        title="search"
        type="text"
        mode={mode}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        value={query}
        onChange={(next) => {
          setQuery(next);
          onChange?.(next);
        }}
        errorMsg=""
      />

      <button
        type="button"
        className={Classes.button}
        aria-label="Search"
        disabled={disabled}
        onClick={() => onSearch?.(query)}
      >
        {loading ? (
          <Spinner size={size} />
        ) : (
          <img
            src={SearchIcon}
            alt="search icon"
            aria-hidden="true"
            className={Classes.icon}
          />
        )}
      </button>
    </div>
  );
};
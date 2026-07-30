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
 * Uncontrolled — the DOM owns the value. Pass `defaultValue` for the initial
 * text and read the current query through `ref` (ref.current.value) inside
 * onSearch. No state hooks are used.
 *
 * Behavior:
 * - Enter key or button click calls onSearch.
 * - While loading, a spinner replaces the icon.
 *
 * Example:
 *
 * const searchRef = useRef<HTMLInputElement>(null);
 *
 * <Search
 *   ref={searchRef}
 *   mode="success"
 *   size="medium"
 *   placeholder="Search members..."
 *   onSearch={() => runSearch(searchRef.current?.value ?? "")}
 * />
 */

export const Search = ({
  mode,
  size,
  placeholder,
  disabled,
  loading,
  defaultValue,
  ref,
  onSearch,
}: SEARCH_PROPS_INTERFACE) => {
  return (
    <div
      className={Classes.container}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onSearch?.();
        }
      }}
    >
      <Input
      title="search"
        ref={ref}
        type="text"
        mode={mode}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
      />

      <button
        type="button"
        className={Classes.button}
        aria-label="Search"
        disabled={disabled}
        onClick={onSearch}
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

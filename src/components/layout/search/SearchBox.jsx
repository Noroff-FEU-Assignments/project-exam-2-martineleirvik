import Turnstone from "turnstone";
import { baseUrl } from "../../../constants/api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const listbox = {
  displayField: "name",
  data: async (query) => {
    const response = await fetch(
      `${baseUrl}bookings?filters[name][$containsi]=${query}`
    );
    const data = await response.json();
    console.log("response", response);
    console.log("data", data);
    return data.data;
  },
  searchType: "contains",
};
const maxItems = 10;

console.log("listbox", listbox);

const styles = {
  input: "<StyledInput />",
};

const Item = ({ item }) => {
  const bookingId = item.id;
  console.log("id", bookingId);
  return (
    <div className="itemDiv d-flex align-items-center">
      <Link to={`/booking/${bookingId}`}>{item.attributes.name}</Link>
    </div>
  );
};

function SearchBox() {
  return (
    <Turnstone
      maxItems={maxItems}
      id="search"
      name="search"
      autoFocus={true}
      typeahead={true}
      debounceWait={250}
      listboxIsImmutable={true}
      noItemsMessage="No match"
      placeholder="Search"
      listbox={listbox}
      styles={styles}
      Item={Item}
    />
  );
}

export default SearchBox;

const StyledInput = styled.div`
  background-color: red;
  padding: 10px;
`;

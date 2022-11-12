import React, { ChangeEvent, useCallback, useState } from "react";

import { SendIcon } from "~/assets/icons";

import * as Styled from "./styled";

const Form = () => {
  const [query, setQuery] = useState("");

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    []
  );

  return (
    <Styled.Form>
      <input
        placeholder="Email address"
        type="email"
        value={query}
        onChange={changeHandler}
      />
      <button aria-label="send to mail">
        <SendIcon />
      </button>
    </Styled.Form>
  );
};

export { Form };

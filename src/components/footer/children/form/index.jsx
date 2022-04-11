import React, { useCallback, useState } from "react";

import { ReactComponent as SendIcon } from "assets/icons/send.svg";

import * as Styled from "./styled";

const Form = () => {
  const [query, setQuery] = useState("");

  const changeHandler = useCallback((e) => setQuery(e.target.value), []);

  return (
    <Styled.Form>
      <input
        placeholder='Email address'
        type='email'
        value={query}
        onChange={changeHandler}
      />
      <button aria-label='send to mail'>
        <SendIcon />
      </button>
    </Styled.Form>
  );
};

export { Form };

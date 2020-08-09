import React, { useState, useContext } from "react";
import { useHttp } from "./../hooks/http.hook";
import { AuthContext } from "./../context/Auth.context";
import { useHistory } from "react-router-dom";

export const CreateLinkPage = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const [link, setLink] = useState("");
  const { request } = useHttp();
  const pressHandler = async event => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link
          },
          { Authorization: `Bearer ${token}` }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2 p">
        <div className="input-field">
          <input
            type="text"
            id="link"
            value={link}
            onChange={event => setLink(event.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">You link</label>
        </div>
      </div>
    </div>
  );
};

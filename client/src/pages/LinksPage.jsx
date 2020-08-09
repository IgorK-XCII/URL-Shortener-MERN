import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth.context";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./../components/Loader";
import { LinkList } from "./../components/LinkList";

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const fetched = await request("/api/link", "GET", null, {
          Authorization: `Bearer ${token}`
        });

        setLinks(fetched);
      } catch (error) {}
    })();
  }, [token, request]);

  return <>{loading ? <Loader /> : <LinkList links={links} />}</>;
};

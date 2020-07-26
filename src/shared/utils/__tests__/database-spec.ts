/* eslint-env jest */
import database from "../../database";
import request from "../request";
import loadDbFromCache from "../loadDbFromCache";

loadDbFromCache();

interface Latest {
  latest: string;
  lang: string;
  updated: number;
  size: number;
}

it("is updated", async () => {
  const response = await request("https://mtgatool.com/database/latest/");
  const latestDb: Latest | undefined = JSON.parse(response);
  const version = latestDb ? parseInt(latestDb.latest) : 0;
  expect(database.version).toBeGreaterThan(version - 10);
});

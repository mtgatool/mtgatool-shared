import cachedJson from "../../resources/database.json";
import database from "../database";

export default function loadDbFromCache(): void {
  const json = cachedJson as unknown;
  database.setDatabaseUnsafely(json as any);
}

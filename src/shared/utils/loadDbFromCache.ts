import cachedJson from "../../resources/database.json";
import { Metadata } from "../../../types/metadata";
import database from "../database";

export default function loadDbFromCache(): void {
  database.setDatabaseUnsafely(cachedJson as Metadata);
}

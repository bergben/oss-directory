import _ from "lodash";
import { Transformation } from "../types.js";
import { assert } from "../utils/common.js";
import countNetworks from "./countNetworks.js";
import eoaToAnyEvm from "./eoaToAnyEvm.js";
import importAgora from "./importAgora.js";
import convertToLower from "./convertToLower.js";
import sortCollection from "./sortCollection.js";

// List of migrations to run
const TRANSFORMATIONS: Transformation[] = [
  eoaToAnyEvm,
  countNetworks,
  importAgora,
  convertToLower,
  sortCollection,
];
// The highest version number among all migrations
const transformationNames = TRANSFORMATIONS.map((t) => t.name);
// Make sure TRANSFORMATIONS has no duplicates
assert(
  _.uniq(transformationNames).length === transformationNames.length,
  `Found duplicate transformation names: ${transformationNames}`,
);

export { TRANSFORMATIONS };

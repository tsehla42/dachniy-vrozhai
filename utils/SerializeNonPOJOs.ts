import type { CategoryTemplateCollection } from '~/utils/types/CategoryTypes';
import { Category } from '~/utils/generator/Category';

const serializeNonPOJOs = (value: object | null) => {
  return structuredClone(value);
};

const serializeNonPOJOsArray = (nonPOJOs: Array<object | null>) => {
  return nonPOJOs.map((value) => serializeNonPOJOs(value));
};

const mapTemplateToSerializedCategory = (template: CategoryTemplateCollection) => {
  return template.map(([categoryNameUkr, subcategories]) => {
    return serializeNonPOJOs(new Category(categoryNameUkr, subcategories)) as object;
  });
};

export { mapTemplateToSerializedCategory };

import { SvgIconTomato, SvgIconFlower, SvgIconBug, SvgIconBag, SvgIconPickaxe } from '#components';
import type { SectionsMapInterface } from '~/utils/types/SectionsTypes';
import type { Component } from 'vue';

export const SVG_ICON_COMPONENTS_MAP: SectionsMapInterface<Component> = {
  vegetables: SvgIconTomato,
  flowers: SvgIconFlower,
  pestsAndDiseases: SvgIconBug,
  fertilizers: SvgIconBag,
  inventory: SvgIconPickaxe,
};

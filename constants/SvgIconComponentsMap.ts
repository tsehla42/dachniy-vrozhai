import SvgIconTomato from '../components/svg/IconTomato.vue';
import SvgIconFlower from '../components/svg/IconFlower.vue';
import SvgIconBug from '../components/svg/IconBug.vue';
import SvgIconBag from '../components/svg/IconBag.vue';
import SvgIconPickaxe from '../components/svg/IconPickaxe.vue';

import type { SectionsMap } from '~/utils/types/SectionsTypes';
import type { Component } from 'vue';

export const SVG_ICON_COMPONENTS_MAP: SectionsMap<Component> = {
  vegetables: markRaw(SvgIconTomato),
  flowers: markRaw(SvgIconFlower),
  pestsAndDiseases: markRaw(SvgIconBug),
  fertilizers: markRaw(SvgIconBag),
  inventory: markRaw(SvgIconPickaxe),
};

import SvgIconTomato from '../components/svg/IconTomato.vue';
import SvgIconFlower from '../components/svg/IconFlower.vue';
import SvgIconBug from '../components/svg/IconBug.vue';
import SvgIconBag from '../components/svg/IconBag.vue';
import SvgIconPickaxe from '../components/svg/IconPickaxe.vue';

import type { SectionsMapEN } from '~/utils/types/SectionsTypes';
import type { Component } from 'vue';

export const SVG_ICON_COMPONENTS_MAP: SectionsMapEN<Component> = {
  ovochi: markRaw(SvgIconTomato),
  kvity: markRaw(SvgIconFlower),
  shkidnykyIKhvoroby: markRaw(SvgIconBug),
  dobryva: markRaw(SvgIconBag),
  inventar: markRaw(SvgIconPickaxe),
};

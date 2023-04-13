import './Header';
import {PiletApi} from 'empty-piral';

export function setup(app: PiletApi) {
    window.registerComponent('header-nav', 'header-nav');
}


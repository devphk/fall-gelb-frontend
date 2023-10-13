import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export enum StretchRetractStates {
    Stretched = 'stretched',
    Retracted = 'retracted',
    MidRetracted = 'midRetracted',
}

export const stretchRetractAnimation = [
    trigger('stretchRetract', [
        state(
            StretchRetractStates.Stretched,
            style({
                width: '190px',
            })
        ),
        state(
            StretchRetractStates.Retracted,
            style({
                width: '50px',
            })
        ),
        state(
            StretchRetractStates.MidRetracted,
            style({
                width: '120px',
            })
        ),
        transition(
            `${StretchRetractStates.Retracted} <=> ${StretchRetractStates.Stretched}`,
            [animate('0.4s ease-in-out')]
        ),
        transition(
            `${StretchRetractStates.MidRetracted} <=> ${StretchRetractStates.Stretched}`,
            [animate('0.4s ease-in-out')]
        ),
    ]),
];

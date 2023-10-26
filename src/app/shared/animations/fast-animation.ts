import { animate, 
         state,
         style, 
         transition, 
         trigger } from "@angular/animations";


export const fastAnimation = [

    trigger('tabState', [state('default', style({
        transform: 'translateY(0)'
      })),
        state('open', style({
          bottom: 'initial',
          top: '20px'
        })),
        transition('default <=> open', animate(500))
      ])

]
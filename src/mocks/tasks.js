import { v4 as uuidv4 } from 'uuid';

let items = [
    {
        id:uuidv4(),
        name: ' abc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 0 // 0 small, 1 medium, 2 high
    },
    {
        id:uuidv4(),
        name: '123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 2 // 0 small, 1 medium, 2 high
    },
    {
        id:uuidv4(),
        name: 'def Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 1 // 0 small, 1 medium, 2 high
    },
    {
        id:uuidv4(),
        name: '435 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 2 // 0 small, 1 medium, 2 high
    },
    {
        id:uuidv4(),
        name: 'bbkd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 0 // 0 small, 1 medium, 2 high
    },
    {
        id:uuidv4(),
        name: 'Lorem ipsum dolor 435 sit amet, consectetur adipisicing elit. Reiciendis ea',
        level: 1 // 0 small, 1 medium, 2 high
    },

]
export default items
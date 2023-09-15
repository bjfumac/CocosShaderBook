import { _decorator, Component, Node, NodeSpace, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveCube')
export class MoveCube extends Component {
    @property
    public speed: number = 100.0;
    private _dir = 1.0;
    start() {

    }

    update(deltaTime: number) {
        if(this.node.position.x < -2){
            this._dir = 1.0;
        }
        else if(this.node.position.x > 2){
            this._dir = -1.0;
        }
        this.node.translate(new Vec3(this.speed * deltaTime * this._dir, 0 , 0), NodeSpace.LOCAL);
    }
}


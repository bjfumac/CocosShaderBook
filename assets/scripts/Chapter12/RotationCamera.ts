import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RotationCamera')
export class RotationCamera extends Component {
    @property
    public speed: number = 100.0;
    start() {

    }

    update(deltaTime: number) {
        var rot = new Vec3(), rot1 = new Vec3();
        Vec3.multiplyScalar(rot, Vec3.UP, deltaTime * this.speed);
        this.node.rotation.getEulerAngles(rot1);
        rot = rot.add(rot1);
        this.node.setRotationFromEuler(rot);
    }
}


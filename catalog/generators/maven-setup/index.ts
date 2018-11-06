
import { BaseGenerator } from 'core/catalog';

export default class MavenSetup extends BaseGenerator {
    public static readonly sourceDir: string = __dirname;

    public static info() {
        return require('./info.json');
    }

    public async apply(resources, props: any = {}) {
        return await this.updateGav(props.groupId, props.artifactId, props.version);
    }
}

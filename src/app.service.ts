import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'api.yaml';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getApiJson(): object {
    return yaml.load(
      readFileSync(join(__dirname, '../src/', YAML_CONFIG_FILENAME), 'utf8'),
    ) as Record<string, any>;
  }
}

import { Structure } from '../base/Structure';

import type { APIChannelPartial } from '../../../../util/types/DiscordAPI';
import type { Client } from '../../../Client';

export abstract class Channel extends Structure {

	public id: string;

	public constructor(client: Client, data: APIChannelPartial) {
		super(client);

		this.id = data.id;
	}

}

export interface TextBasedChannel {
	foo: string;
}

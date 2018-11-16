/**
 * Snowflakes
 */
export type snowflake = string;

/********************************************************************************/
// API Payloads (prefixed with API, suffix is Data for full payloads or Partial)
/********************************************************************************/

/**
 * https://discordapp.com/developers/docs/resources/channel#message-object-message-structure
 */
export interface APIMessageData {
	id: snowflake;
	channel_id: snowflake;
	guild_id?: snowflake;
	author: APIUserData;
	member?: APIGuildMemberPartial;
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: (APIUserData | (APIUserData & APIGuildMemberPartial))[];
	mention_roles: snowflake[];
	attachments: APIMessageAttachmentData[];
	embeds: APIEmbedData[];
	reactions?: APIReactionData[];
	nonce?: snowflake | null;
	pinned: boolean;
	webhook_id?: snowflake;
	type: MessageType;
	activity?: APIMessageActivityData;
	application?: APIMessageApplicationData;
}

/**
 * https://discordapp.com/developers/docs/resources/user#user-object
 */
export interface APIUserData {
	id: snowflake;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	mfa_enabled?: boolean;
	locale?: string;
	verified?: boolean;
	email?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface APIConnectionData {
	id: string;
	name: string;
	type: string;
	revoked: boolean;
	integrations: APIIntegrationData[];
}

/**
 * Not Documented, but Partial packets only exclude the user property
 */
export interface APIGuildMemberPartial {
	nick?: string;
	roles: snowflake[];
	joined_at: string;
	deaf: boolean;
	mute: boolean;
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMemberData extends APIGuildMemberPartial {
	user: APIUserData;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#attachment-object
 */
export interface APIMessageAttachmentData {
	id: snowflake;
	filename: string;
	size: number;
	url: string;
	proxy_url: string;
	height: number | null;
	width: number | null;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#reaction-object
 */
export interface APIReactionData {
	count: number;
	me: boolean;
	emoji: APIEmojiPartial;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface APIMessageActivityData {
	type: MessageType;
	party_id?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#message-object-message-application-structure
 */
export interface APIMessageApplicationData {
	id: snowflake;
	cover_image: string;
	description: string;
	icon: string;
	name: string;
}

/**
 * Not Documented, but partial doesn't include roles, users, require_colons, or managed
 */
export interface APIEmojiPartial {
	id: snowflake | null;
	name: string;
	animated: boolean;
}

/**
 * https://discordapp.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmojiData extends APIEmojiPartial {
	roles?: snowflake[];
	user?: APIUserData;
	require_colons?: boolean;
	managed?: boolean;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#reaction-object
 */
export interface APIOverwriteData {
	id: snowflake;
	type: 'role' | 'member';
	allow: number;
	deny: number;
}

/**
 * Not Documented, but partial only includes id, name, icon, and splash
 */
export interface APIGuildPartial {
	id: snowflake;
	name: string;
	icon: string | null;
	splash: string | null;
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuildData extends APIGuildPartial {
	owner?: boolean;
	owner_id: snowflake;
	permissions?: number;
	region: string;
	afk_channel_id: snowflake | null;
	afk_timeout: number;
	embed_enabled?: boolean;
	embed_channel_id?: snowflake;
	verification_level: GuildVerificationLevel;
	default_message_notifications: GuildDefaultMessageNotifications;
	explicit_content_filter: GuildExplicitContentFilterLevel;
	roles: APIRoleData[];
	emojis: APIEmojiData[];
	features: string[];
	mfa_level: GuildMFALevel;
	application_id: snowflake | null;
	widget_enabled?: boolean;
	widget_channel_id?: boolean;
	system_channel_id: snowflake | null;
	joined_at?: string;
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: APIVoiceStatePartial[];
	members?: APIGuildMemberData[];
	channels?: APIChannelData[];
	presences?: APIPresenceUpdateData[];
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-embed-object-guild-embed-structure
 */
export interface APIGuildEmbedData {
	enabled: boolean;
	channel_id: snowflake | null;
}

/**
 * https://discordapp.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export interface APIIntegrationData {
	id: snowflake;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	role_id: snowflake;
	expire_behavior: number;
	expire_grace_period: number;
	user: APIUserData;
	account: APIIntegrationAccountData;
	synced_at: string;
}

/**
 * https://discordapp.com/developers/docs/resources/guild#integration-account-object
 */
export interface APIIntegrationAccountData {
	id: snowflake;
	name: string;
}

/**
 * https://discordapp.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface APIBanData {
	reason: string | null;
	user: APIUserData;
}

// Invites

/**
 * https://discordapp.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface APIInviteData {
	code: string;
	guild?: APIGuildPartial;
	channel: APIChannelPartial;
	approximate_presence_count?: number;
	approximate_member_count?: number;
}

/**
 * https://discordapp.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure
 */
export interface APIInviteMetadataData {
	inviter: APIUserData;
	uses: number;
	max_uses: number;
	max_age: number;
	temporary: boolean;
	created_at: string;
	revoked: boolean;
}

/**
 * https://discordapp.com/developers/docs/topics/permissions#role-object
 */
export interface APIRoleData {
	id: snowflake;
	name: string;
	color: number;
	hoist: boolean;
	position: number;
	permissions: number;
	managed: boolean;
	mentionable: boolean;
}

/**
 * Not Documented, but partial doesn't include guild_id or member
 */
export interface APIVoiceStatePartial {
	channel_id: snowflake | null;
	user_id: snowflake;
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: boolean;
	suppress: boolean;
}

/**
 * https://discordapp.com/developers/docs/resources/voice#voice-state-object
 */
export interface APIVoiceStateData extends APIVoiceStatePartial {
	guild_id?: snowflake;
	member?: APIGuildMemberData;
}

/**
 * https://discordapp.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegionData {
	id: string;
	name: string;
	vip: boolean;
	optional: boolean;
	deprecated: boolean;
	custom: boolean;
}

/**
 * Not Documented, but partial only includes id, name, and type
 */
export interface APIChannelPartial {
	id: snowflake;
	type: ChannelType;
	name?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#channel-object
 */
export interface APIChannelData extends APIChannelPartial {
	guild_id?: snowflake;
	position?: number;
	permission_overwrites?: APIOverwriteData[];
	topic?: string | null;
	nsfw?: boolean;
	last_message_id?: string | null;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	recipients?: APIUserData[];
	icon?: string | null;
	owner_id?: snowflake;
	application_id?: snowflake;
	parent_id?: snowflake | null;
	last_pin_timestamp?: string;
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#presence-update
 */
export interface APIPresenceUpdateData {
	user: APIUserData;
	roles: snowflake[];
	game: APIActivityData | null;
	guild_id: snowflake;
	status: PresenceUpdateStatus;
	activities: APIActivityData[];
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object
 */
export interface APIActivityData {
	name: string;
	type: ActivityType;
	url?: string | null;
	timestamps?: APIActivityDataTimestamps[];
	application_id?: snowflake;
	details?: string | null;
	state?: string | null;
	party?: APIActivityDataParty;
	assets?: APIActivityDataAssets;
	secrets?: APIActivityDataSecrets;
	instance?: boolean;
	flags?: number;
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
export interface APIActivityDataTimestamps {
	start?: number;
	end?: number;
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface APIActivityDataParty {
	id?: snowflake;
	size?: [number, number];
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export interface APIActivityDataAssets {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export interface APIActivityDataSecrets {
	join?: string;
	spectate?: string;
	match?: string;
}

// Embeds

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object
 */
export interface APIEmbedData {
	title?: string;
	type?: 'rich' | 'image' | 'video';
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: APIEmbedFooterData;
	image?: APIEmbedImageData;
	thumbnail?: APIEmbedThumbnailData;
	video?: APIEmbedVideoData;
	provider?: APIEmbedProviderData;
	author?: APIEmbedAuthorData;
	fields?: APIEmbedFieldData[];
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface APIEmbedFooterData {
	text: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface APIEmbedImageData {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnailData {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface APIEmbedVideoData {
	url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface APIEmbedProviderData {
	name?: string;
	url?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface APIEmbedAuthorData {
	name?: string;
	url?: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface APIEmbedFieldData {
	name: string;
	value: string;
	inline?: boolean;
}

// Audit Logs

/**
 * https://discordapp.com/developers/docs/resources/audit-log#audit-log-object
 */
export interface APIAuditLogData {
	webhooks: APIWebhookData[];
	users: APIUserData[];
	audit_log_entries: APIAuditLogEntryData[];
}

/**
 * https://discordapp.com/developers/docs/resources/audit-log#audit-log-entry-object
 */
export interface APIAuditLogEntryData {
	target_id: snowflake | null;
	changes?: APIAuditLogChangeData[];
	user_id: snowflake;
	id: snowflake;
	action_type: AuditLogEvent;
	options?: APIAuditLogOptionsData;
	reason?: string;
}

/**
 * https://discordapp.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 */
export interface APIAuditLogChangeData {
	new_value: any;
	old_value: any;
	key: string;
}

/**
 * https://discordapp.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface APIAuditLogOptionsData {
	delete_member_days?: number;
	members_removed?: number;
	channel_id?: snowflake;
	count?: number;
	id?: snowflake;
	type?: 'member' | 'role';
	role_name?: string;
}

// Webhooks

/**
 * https://discordapp.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface APIWebhookData {
	id: snowflake;
	guild_id?: snowflake;
	channel_id: snowflake;
	user?: APIUserData;
	name: string | null;
	avatar: string | null;
	token: string;
}

/**********************************/
// Enums for discord's ws payloads
/**********************************/

/**
 * https://discordapp.com/developers/docs/resources/channel#message-object-message-types
 */
export enum MessageType {
	Default,
	RecipientAdd,
	RecipientRemove,
	Call,
	ChannelNameChange,
	ChannelIconChange,
	ChannelPinnedMessage,
	GuildMemberJoin
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum GuildDefaultMessageNotifications {
	AllMessages,
	OnlyMentions
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum GuildExplicitContentFilterLevel {
	Disabled,
	MembersWithoutRoles,
	AllMembers
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum GuildMFALevel {
	None,
	Elevated
}

/**
 * https://discordapp.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum GuildVerificationLevel {
	None,
	Low,
	Medium,
	High,
	VeryHigh
}

/**
 * https://discordapp.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
	GuildText,
	DM,
	GuildVoice,
	GroupDM,
	GuildCategory
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export enum PresenceUpdateStatus {
	Idle = 'idle',
	DnD = 'dnd',
	Online = 'online',
	Offline = 'offline'
}

/**
 * https://discordapp.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export enum ActivityType {
	Game,
	Streaming,
	Listening
}

/**
 * https://discordapp.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export enum AuditLogEvent {
	GuildUpdate = 1,
	ChannelCreate = 10,
	ChannelUpdate = 11,
	ChannelDelete = 12,
	ChannelOverwriteCreate = 13,
	ChannelOverwriteUpdate = 14,
	ChannelOverwriteDelete = 15,
	MemberKick = 20,
	MemberPrune = 21,
	MemberBanAdd = 22,
	MemberBanRemove = 23,
	MemberUpdate = 24,
	MemberRoleUpdate = 25,
	RoleCreate = 30,
	RoleUpdate = 31,
	RoleDelete = 32,
	InviteCreate = 40,
	InviteUpdate = 41,
	InviteDelete = 42,
	WebhookCreate = 50,
	WebhookUpdate = 51,
	WebhookDelete = 52,
	EmojiCreate = 60,
	EmojiUpdate = 61,
	EmojiDelete = 62,
	MessageDelete = 72
}
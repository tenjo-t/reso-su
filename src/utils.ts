export function pub(path: string) {
	return `${import.meta.env.BASE_URL}/${path.startsWith("/") ? path.slice(1) : path}`;
}

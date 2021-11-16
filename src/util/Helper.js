export function convertToSlug(Text) {
    return Text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]+/g,'')
            .replace(/\s+/g,'-')
            .replace(/^-+/g,'')
            .replace(/-+$/g,'');
}
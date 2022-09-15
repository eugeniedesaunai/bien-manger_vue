import api from '@/services/airtable';
export default {
    namespaced: true,
    actions: {
        async addImage(context, { url }) {
            let object = {
                records: [
                    { fields: { url: url } }
                ]
            }
            await api.create({ resource: 'Image', data: object })
        }
    }
}
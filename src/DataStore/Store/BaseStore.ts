export class BaseStore<EntityType>{

    public plainToEntityType(resultSet: any) {
        const rawJson = <EntityType>JSON.parse(JSON.stringify(resultSet));
        return rawJson;
    }
    public plainToEntityTypeArr(resultSet: any) {
        const rawJson: EntityType[] = new Array();
        resultSet.forEach(function (obj: any) {
            rawJson.push(<EntityType>JSON.parse(JSON.stringify(obj)));
        });
        return rawJson;
    }
}
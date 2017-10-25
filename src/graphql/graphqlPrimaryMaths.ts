interface PMCourse {
    name: 'Primary Maths';
    exerciseCount: number;
}

export const PMTypeDefs = `
type PrimaryMathsCourse {
    name: String!
    exerciseCount: Int!
}
`;

export const PMRootFields = `
PrimaryMaths: PrimaryMathsCourse!
`;

export const PMResolvers = {
    root: {
        PrimaryMaths: async (obj: undefined, args: {}, context: any): Promise<PMCourse> => {
            return {
                name: 'Primary Maths',
                exerciseCount: 10
            };
        }
    }
};
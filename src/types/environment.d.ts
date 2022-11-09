export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_PORT: number;
            DATABASE_URL: string;
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}
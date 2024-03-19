const esModules = [
    '@angular/animations',
    '@angular/cdk',
    '@angular/cdk',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/localize',
    '@angular/material',
    '@angular/platform-browser-dynamic',
    '@angular/platform-browser',
    '@angular/router',
    '@angular/service-worker',
    '@ctrl/ngx-emoji-mart',
    '@danielmoncada/angular-datetime-picker',
    '@flaviosantoro92/ngx-datatable',
    '@fortawesome/angular-fontawesome',
    '@ls1intum/apollon',
    '@ng-bootstrap/ng-bootstrap',
    '@ngx-translate/core',
    '@ngx-translate/http-loader',
    '@swimlane/ngx-charts',
    '@swimlane/ngx-graph',
    'collapse-white-space',
    'd3-array',
    'd3-brush',
    'd3-color',
    'd3-drag',
    'd3-ease',
    'd3-format',
    'd3-hierarchy',
    'd3-interpolate',
    'd3-path',
    'd3-scale',
    'd3-selection',
    'd3-shape',
    'd3-time',
    'd3-transition',
    'dayjs/esm',
    'export-to-csv',
    'franc-min',
    'internmap',
    'lodash-es',
    'n-gram',
    'ngx-device-detector',
    'ngx-infinite-scroll',
    'ngx-webstorage',
    'rxjs/operators',
    'trigram-utils',
].join('|');

const {
    compilerOptions: { baseUrl = './' },
} = require('./tsconfig.json');

module.exports = {
    testEnvironmentOptions: {
        url: 'https://artemis.fake/test',
    },
    roots: ['<rootDir>', `<rootDir>/${baseUrl}`],
    modulePaths: [`<rootDir>/${baseUrl}`],
    setupFiles: ['jest-date-mock'],
    cacheDirectory: '<rootDir>/build/jest-cache',
    coverageDirectory: '<rootDir>/build/test-results/',
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: '<rootDir>/build/test-results/',
                outputName: 'TESTS-results-jest.xml',
            },
        ],
    ],
    collectCoverageFrom: ['src/main/webapp/**/*.{js,jsx,ts,tsx}', '!src/main/webapp/**/*.module.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'src/main/webapp/app/account/account.route.ts',
        'src/main/webapp/app/admin/admin.route.ts',
        'src/main/webapp/app/exercises/quiz/manage/apollon-diagrams/apollon-diagram.route.ts',
        'src/main/webapp/app/lecture/lecture-unit/lecture-unit-management/lecture-unit-management.route.ts',
        'src/main/webapp/app/exercises/quiz/manage/quiz-management.route.ts',
        'src/main/webapp/app/admin/organization-management/organization-management.route.ts',
        'src/main/webapp/app/admin/system-notification-management/system-notification-management.route.ts',
        'src/main/webapp/app/admin/upcoming-exams-and-exercises/upcoming-exams-and-exercises.route.ts',
        'src/main/webapp/app/admin/user-management/user-management.route.ts',
        'src/main/webapp/app/assessment/assessment-locks/assessment-locks.route.ts',
        'src/main/webapp/app/complaints/list-of-complaints/list-of-complaints.route.ts',
        'src/main/webapp/app/course/dashboards/assessment-dashboard/assessment-dashboard.route.ts',
        'src/main/webapp/app/course/manage/course-management.route.ts',
        'src/main/webapp/app/exam/exam-scores/exam-scores.route.ts',
        'src/main/webapp/app/exam/participate/exam-participation.route.ts',
        'src/main/webapp/app/exercises/file-upload/manage/file-upload-exercise-management.route.ts',
        'src/main/webapp/app/exercises/modeling/manage/modeling-exercise.route.ts',
        'src/main/webapp/app/exam/manage/exam-management.route.ts',
        'src/main/webapp/app/exercises/shared/exercise-hint/manage/exercise-hint.route.ts',
        'src/main/webapp/app/core/config/prod.config.ts',
    ],
    coverageThreshold: {
        global: {
            // TODO: in the future, the following values should increase to at least 90%
            statements: 87.2,
            branches: 73.8,
            functions: 81.6,
            lines: 87.2,
        },
    },
    coverageReporters: ['clover', 'json', 'lcov', 'text-summary'],
    setupFilesAfterEnv: ['<rootDir>/src/test/javascript/spec/jest-test-setup.ts', 'jest-extended/all'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    resolver: '<rootDir>/jest.resolver.js',
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': [
            'jest-preset-angular',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                stringifyContentPathRegex: '\\.html$',
                isolatedModules: true,
                diagnostics: {
                    ignoreCodes: [151001],
                },
            },
        ],
    },
    modulePathIgnorePatterns: [],
    testTimeout: 3000,
    testMatch: [
        '<rootDir>/src/test/javascript/spec/component/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/directive/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/entities/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/integration/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/pipe/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/service/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/util/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/interceptor/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/config/**/*.spec.ts',
        '<rootDir>/src/test/javascript/spec/core/**/*.spec.ts',
    ],
    moduleNameMapper: {
        '^app/(.*)': '<rootDir>/src/main/webapp/app/$1',
        'test/(.*)': '<rootDir>/src/test/javascript/spec/$1',
        '@assets/(.*)': '<rootDir>/src/main/webapp/assets/$1',
        '@core/(.*)': '<rootDir>/src/main/webapp/app/core/$1',
        '@env': '<rootDir>/src/main/webapp/environments/environment',
        '@src/(.*)': '<rootDir>/src/src/$1',
        '@state/(.*)': '<rootDir>/src/app/state/$1',
        '^lodash-es$': 'lodash',
        '@sentry/angular-ivy': '<rootDir>/node_modules/@sentry/angular-ivy/bundles/sentry-angular-ivy.umd.js',
    },
};

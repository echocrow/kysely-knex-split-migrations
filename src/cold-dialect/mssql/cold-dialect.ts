import {
  MssqlAdapter,
  MssqlIntrospector,
  type DatabaseIntrospector,
  type DialectAdapter,
  type Kysely,
  type QueryCompiler,
} from 'kysely'
import type {ColdDialect} from '../cold-dialect.js'
import type {ResultsParser} from '../results-parser.js'
import {MSSQLKnexQueryBuilder} from './query-compiler.js'
import {MSSQLResultsParser} from './results-parser.js'

export class MSSQLColdDialect implements ColdDialect {
  createAdapter(): DialectAdapter {
    return new MssqlAdapter()
  }

  createIntrospector(db: Kysely<any>): DatabaseIntrospector {
    return new MssqlIntrospector(db)
  }

  createQueryCompiler(): QueryCompiler {
    return new MSSQLKnexQueryBuilder()
  }

  createResultsParser(): ResultsParser {
    return new MSSQLResultsParser()
  }
}
